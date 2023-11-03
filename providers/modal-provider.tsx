"use client";
//GLOBAL DECLARATIONS
import { useEffect, useState } from "react";

//LOCAL DECLARATIONS
import { StoreModal } from "@/components/modals/store-modal";


export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }

    return (
        <>
         <StoreModal />
        </>
    );
};