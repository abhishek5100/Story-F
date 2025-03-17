import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { usePostProductData, useUpdateProductData } from "./services";
import Loader from "../components/loader/Loader";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddProductModal = ({ isOpen, setIsOpen, modalType, editData, id, setEditData }) => {
    const [loading, setLoading] = useState(false);

    const Schema = Yup.object({
        story_name: Yup.string().required("Story name is required").min(3, "Story name must be at least 3 characters long"),
        description: Yup.string().required("Description is required").min(10, "Description must be at least 10 characters long"),
    });

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(Schema),
    });

    const { mutate: addProduct } = usePostProductData();
    const { mutate: updateProduct } = useUpdateProductData();

    useEffect(() => {
        if (editData) {
            setValue("story_name", editData.story_name);
            setValue("description", editData.description);
        }
    }, [setValue, editData]);

    const onSubmit = (data) => {
        if (modalType === "add") {
            setLoading(true);
            addProduct(data, {
                onSuccess: () => {
                    setIsOpen(false);
                    setLoading(false);
                    reset();
                    setError("")

                },
                onError: (error) => {
                    setLoading(false);
                    console.error("Error posting data:", error);
                },
            });
        }

        else if (modalType === "edit") {
            setLoading(true);
            updateProduct({ id, data }, {
                onSuccess: () => {
                    setIsOpen(false);
                    setLoading(false);
                    reset();
                    setError("")
                },
                onError: (error) => {
                    setLoading(false);
                    console.error("Error updating data:", error);
                },
            });
        }
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setError("")
        setEditData({})
        reset()
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-3 bg-black opacity-70"
                onClick={handleCloseModal}
            ></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                {loading && <Loader />}
                <div className="bg-white w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">{modalType === "edit" ? "Update Story" : "Add Story"}</h2>
                    </div>
                    <div className="mt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Story Name</label>
                                <input
                                    {...register("story_name")}
                                    type="text"
                                    className={`mt-1 block w-full px-4 py-2 border ${errors.story_name ? "border-red-500" : "border-gray-300"
                                        } rounded-md focus:outline-none`}
                                    placeholder="Enter product name"
                                />
                                {errors.story_name && <p className="text-red-500 text-xs mt-1">{errors.story_name.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Story Description</label>
                                <textarea
                                    {...register("description")}
                                    className={`mt-1 block w-full px-4 py-2  border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none `}
                                    placeholder="Enter product description"
                                ></textarea>
                                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                            </div>

                            <div className="mt-6 flex gap-4 justify-end">
                                <button
                                    type="submit"
                                    className="border bg-gray-200 text-black font-bold px-5 py-2 rounded-[5px]"                                >
                                    {modalType === "edit" ? "Update Story" : "Add Story"}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="border bg-gray-200 text-black font-bold px-5 py-2 rounded-[5px]"                                >
                                    cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProductModal;
