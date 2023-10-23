import { React, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import "../../../css/database.css";
import { useTranslation } from "react-i18next";
import { MaterialReactTable } from "material-react-table";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { data, states } from "../makeData";

export const Database = () => {
    const [t] = useTranslation("database");

    const navigate = useNavigate();
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState(() => data);
    const [validationErrors, setValidationErrors] = useState({});

    const handleCreateNewRow = values => {
        tableData.push(values);
        setTableData([...tableData]);
    };

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;
            // send/receive api updates here, then refetch or update local table data for re-render
            setTableData([...tableData]);
            exitEditingMode(); // required to exit editing mode and close modal
        }
    };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        row => {
            if (
                !confirm(
                    `Are you sure you want to delete ${row.getValue(
                        "firstName"
                    )}`
                )
            ) {
                return;
            }
            // send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData]
    );

    const getCommonEditTextFieldProps = useCallback(
        cell => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id]
                // onBlur: event => {
                //     const isValid =
                //         cell.column.id === "email"
                //             ? validateEmail(event.target.value)
                //             : cell.column.id === "age"
                //             ? validateAge(+event.target.value)
                //             : validateRequired(event.target.value);
                //     if (!isValid) {
                //         // set validation error for cell if invalid
                //         setValidationErrors({
                //             ...validationErrors,
                //             [cell.id]: `${cell.column.columnDef.header} is required`
                //         });
                //     } else {
                //         // remove validation error for cell if valid
                //         delete validationErrors[cell.id];
                //         setValidationErrors({
                //             ...validationErrors
                //         });
                //     }
                // }
            };
        },
        [validationErrors]
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: "id",
                header: "ID",
                enableColumnOrdering: false,
                enableEditing: false, // disable editing on this column
                enableSorting: false,
                size: 80
            },
            {
                accessorKey: "firstName",
                header: "First Name",
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell)
                })
            },
            {
                accessorKey: "lastName",
                header: "Last Name",
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell)
                })
            },
            {
                accessorKey: "email",
                header: "Email",
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: "email"
                })
            },
            {
                accessorKey: "age",
                header: "Age",
                size: 80,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: "number"
                })
            },
            {
                accessorKey: "state",
                header: "State",
                muiTableBodyCellEditTextFieldProps: {
                    select: true, // change to select for a dropdown
                    children: states.map(state => (
                        <MenuItem key={state} value={state}>
                            {state}
                        </MenuItem>
                    ))
                }
            }
        ],
        [getCommonEditTextFieldProps]
    );

    return (
        <>
            <div className="mt-48 m-auto w-11/12 h-96">
                <MaterialReactTable
                    displayColumnDefOptions={{
                        "mrt-row-actions": {
                            muiTableHeadCellProps: {
                                align: "center"
                            },
                            size: 120
                        }
                    }}
                    columns={columns}
                    data={tableData}
                    editingMode="modal" // default
                    enableColumnOrdering
                    enableEditing
                    onEditingRowSave={handleSaveRowEdits}
                    onEditingRowCancel={handleCancelRowEdits}
                    renderRowActions={({ row, table }) => (
                        <Box sx={{ display: "flex", gap: "0.5rem" }}>
                            <Tooltip arrow placement="left" title="Edit">
                                <IconButton
                                    onClick={() => table.setEditingRow(row)}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip arrow placement="right" title="Delete">
                                <IconButton
                                    color="error"
                                    onClick={() => handleDeleteRow(row)}>
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                    renderTopToolbarCustomActions={() => (
                        <Button
                            className="bg-cyan-300"
                            color="primary"
                            onClick={() => setCreateModalOpen(true)}
                            variant="contained">
                            Create New Account
                        </Button>
                    )}
                />
                <CreateNewAccountModal
                    columns={columns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
            </div>
        </>
    );
};

// example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ""] = "";
            return acc;
        }, {})
    );
    const [t] = useTranslation("database");
    const handleSubmit = () => {
        // put your validation logic here
        onSubmit(values);
        onClose();
    };

    const validateRequired = value => !!value.length;
    const validateEmail = email =>
        !!email.length &&
        email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    const validateAge = age => age >= 18 && age <= 50;

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen -z-50 fixed top-0 left-0 object-cover">
                <source src="DatabaseBlackBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    {t("database")}
                </h1>
                <div className="">
                    <div className="flex justify-end mr-12">
                        <div
                            className="flex justify-center items-center mr-5 w-64 h-16 text-2xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                            // onClick={() => {
                            //     setIsOpen(true);
                            // }}
                        >
                            <p>New Column</p>
                            <i className="ml-4 fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <div className="glass p-10 w-11/12 h-screen mt-5 mb-[10rem] m-auto table2">
                            <div className="relative force-overflow table1 shadow-md sm:rounded-lg">
                                {/* <Dialog open={open}>
                                    <DialogTitle textAlign="center">
                                        Create New Account
                                    </DialogTitle>
                                    <DialogContent>
                                        <form
                                            onSubmit={e => e.preventDefault()}>
                                            <Stack
                                                sx={{
                                                    width: "100%",
                                                    minWidth: {
                                                        xs: "300px",
                                                        sm: "360px",
                                                        md: "400px"
                                                    },
                                                    gap: "1.5rem"
                                                }}>
                                                {columns.map(column => (
                                                    <TextField
                                                        key={column.accessorKey}
                                                        label={column.header}
                                                        name={
                                                            column.accessorKey
                                                        }
                                                        onChange={e =>
                                                            setValues({
                                                                ...values,
                                                                [e.target.name]:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                    />
                                                ))}
                                            </Stack>
                                        </form>
                                    </DialogContent>
                                    <DialogActions sx={{ p: "1.25rem" }}>
                                        <Button onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button
                                            color="secondary"
                                            onClick={handleSubmit}
                                            variant="contained">
                                            Create New Account
                                        </Button>
                                    </DialogActions>
                                </Dialog> */}

                                {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Color
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Category
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Accesories
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Available
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Weight
                                            </th>
                                            {/* <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Action
                                            </th> */}
                                {/* </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">
                                                3.0 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td className="px-6 py-4">White</td>
                                            <td className="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$1999</td>
                                            <td className="px-6 py-4">
                                                1.0 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">Black</td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">$99</td>
                                            <td className="px-6 py-4">
                                                0.2 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple Watch
                                            </th>
                                            <td className="px-6 py-4">Black</td>
                                            <td className="px-6 py-4">
                                                Watches
                                            </td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">$199</td>
                                            <td className="px-6 py-4">
                                                0.12 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple iMac
                                            </th>
                                            <td className="px-6 py-4">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4">PC</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">
                                                7.0 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple AirPods
                                            </th>
                                            <td className="px-6 py-4">White</td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$399</td>
                                            <td className="px-6 py-4">38 g</td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                iPad Pro
                                            </th>
                                            <td className="px-6 py-4">Gold</td>
                                            <td className="px-6 py-4">
                                                Tablet
                                            </td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$699</td>
                                            <td className="px-6 py-4">
                                                1.3 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>

                            {/* <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th>ROBERTO</th>
                                        <th>ROLANDO</th>
                                        <th>SEBAS</th>
                                        <th>BYNX</th>
                                        <th>BYNX</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// import React, { useCallback, useMemo, useState } from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   MenuItem,
//   Stack,
//   TextField,
//   Tooltip,
// } from '@mui/material';
// import { Delete, Edit } from '@mui/icons-material';
// import { data, states } from './makeData';

// const Example = () => {
//     const [createModalOpen, setCreateModalOpen] = useState(false);
//     const [tableData, setTableData] = useState(() => data);
//     const [validationErrors, setValidationErrors] = useState({});

//     const handleCreateNewRow = values => {
//         tableData.push(values);
//         setTableData([...tableData]);
//     };

//     const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
//         if (!Object.keys(validationErrors).length) {
//             tableData[row.index] = values;
//             // send/receive api updates here, then refetch or update local table data for re-render
//             setTableData([...tableData]);
//             exitEditingMode();
//             // required to exit editing mode and close modal
//         }
//     };

//     const handleCancelRowEdits = () => {
//         setValidationErrors({});
//     };

//     const handleDeleteRow = useCallback(
//         row => {
//             if (
//                 !confirm(
//                     `Are you sure you want to delete ${row.getValue(
//                         "firstName"
//                     )}`
//                 )
//             ) {
//                 return;
//             }
//             // send api delete request here, then refetch or update local table data for re-render
//             tableData.splice(row.index, 1);
//             setTableData([...tableData]);
//         },
//         [tableData]
//     );

//     const getCommonEditTextFieldProps = useCallback(
//         cell => {
//             return {
//                 error: !!validationErrors[cell.id],
//                 helperText: validationErrors[cell.id],
//                 onBlur: event => {
//                     const isValid =
//                         cell.column.id === "email"
//                             ? validateEmail(event.target.value)
//                             : cell.column.id === "age"
//                             ? validateAge(+event.target.value)
//                             : validateRequired(event.target.value);
//                     if (!isValid) {
//                         // set validation error for cell if invalid
//                         setValidationErrors({
//                             ...validationErrors,
//                             [cell.id]: `${cell.column.columnDef.header} is required`
//                         });
//                     } else {
//                         // remove validation error for cell if valid
//                         delete validationErrors[cell.id];
//                         setValidationErrors({
//                             ...validationErrors
//                         });
//                     }
//                 }
//             };
//         },
//         [validationErrors]
//     );

//     const columns = useMemo(
//         () => [
//             {
//                 accessorKey: "id",
//                 header: "ID",
//                 enableColumnOrdering: false,
//                 enableEditing: false, // disable editing on this column
//                 enableSorting: false,
//                 size: 80
//             },
//             {
//                 accessorKey: "firstName",
//                 header: "First Name",
//                 size: 140,
//                 muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
//                     ...getCommonEditTextFieldProps(cell)
//                 })
//             },
//             {
//                 accessorKey: "lastName",
//                 header: "Last Name",
//                 size: 140,
//                 muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
//                     ...getCommonEditTextFieldProps(cell)
//                 })
//             },
//             {
//                 accessorKey: "email",
//                 header: "Email",
//                 muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
//                     ...getCommonEditTextFieldProps(cell),
//                     type: "email"
//                 })
//             },
//             {
//                 accessorKey: "age",
//                 header: "Age",
//                 size: 80,
//                 muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
//                     ...getCommonEditTextFieldProps(cell),
//                     type: "number"
//                 })
//             },
//             {
//                 accessorKey: "state",
//                 header: "State",
//                 muiTableBodyCellEditTextFieldProps: {
//                     select: true, // change to select for a dropdown
//                     children: states.map(state => (
//                         <MenuItem key={state} value={state}>
//                             {state}
//                         </MenuItem>
//                     ))
//                 }
//             }
//         ],
//         [getCommonEditTextFieldProps]
//     );

//     return (
//         <>
//             <MaterialReactTable
//                 displayColumnDefOptions={{
//                     "mrt-row-actions": {
//                         muiTableHeadCellProps: {
//                             align: "center"
//                         },
//                         size: 120
//                     }
//                 }}
//                 columns={columns}
//                 data={tableData}
//                 editingMode="modal"
//                 enableColumnOrdering
//                 enableEditing
//                 onEditingRowSave={handleSaveRowEdits}
//                 onEditingRowCancel={handleCancelRowEdits}
//                 renderRowActions={({ row, table }) => (
//                     <Box sx={{ display: "flex", gap: "1rem" }}>
//                         <Tooltip arrow placement="left" title="Edit">
//                             <IconButton
//                                 onClick={() => table.setEditingRow(row)}>
//                                 <Edit />
//                             </IconButton>
//                         </Tooltip>
//                         <Tooltip arrow placement="right" title="Delete">
//                             <IconButton
//                                 color="error"
//                                 onClick={() => handleDeleteRow(row)}>
//                                 <Delete />
//                             </IconButton>
//                         </Tooltip>
//                     </Box>
//                 )}
//                 renderTopToolbarCustomActions={() => (
//                     <Button
//                         color="secondary"
//                         onClick={() => setCreateModalOpen(true)}
//                         variant="contained">
//                         Create New Account
//                     </Button>
//                 )}
//             />
//             <CreateNewAccountModal
//                 columns={columns}
//                 open={createModalOpen}
//                 onClose={() => setCreateModalOpen(false)}
//                 onSubmit={handleCreateNewRow}
//             />
//         </>
//     );
// };

// // example of creating a mui dialog modal for creating new rows
// // export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
// //   const [values, setValues] = useState(() =>
// //     columns.reduce((acc, column) => {
// //       acc[column.accessorKey ?? ''] = '';
// //       return acc;
// //     }, {}),
// //   );

// //   const handleSubmit = () => {
// //     //put your validation logic here
// //     onSubmit(values);
// //     onClose();
// //   };

// //   return (
// //     <Dialog open={open}>
// //       <DialogTitle textAlign="center">Create New Account</DialogTitle>
// //       <DialogContent>
// //         <form onSubmit={(e) => e.preventDefault()}>
// //           <Stack
// //             sx={{
// //               width: '100%',
// //               minWidth: { xs: '300px', sm: '360px', md: '400px' },
// //               gap: '1.5rem',
// //             }}
// //           >
// //             {columns.map((column) => (
// //               <TextField
// //                 key={column.accessorKey}
// //                 label={column.header}
// //                 name={column.accessorKey}
// //                 onChange={(e) =>
// //                   setValues({ ...values, [e.target.name]: e.target.value })
// //                 }
// //               />
// //             ))}
// //           </Stack>
// //         </form>
// //       </DialogContent>
// //       <DialogActions sx={{ p: '1.25rem' }}>
// //         <Button onClick={onClose}>Cancel</Button>
// //         <Button color="secondary" onClick={handleSubmit} variant="contained">
// //           Create New Account
// //         </Button>
// //       </DialogActions>
// //     </Dialog>
// //   );
// // };

// // const validateRequired = (value) => !!value.length;
// // const validateEmail = (email) =>
// //   !!email.length &&
// //   email
// //     .toLowerCase()
// //     .match(
// //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
// //     );
// // const validateAge = (age) => age >= 18 && age <= 50;

// // export default Example;
