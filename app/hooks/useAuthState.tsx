'use client'

import { useState } from 'react';


export const useAuthState = () => {
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>();
    const resetState = () => {
        setError('');
        setSuccess('')
        setLoading(false);
    };
    return { error, setError, success, setSuccess, loading, setLoading, resetState }
}