import { useEffect, useState } from "react";
import type { ApiCategories } from "../../types/api-types";
import { getCategories } from "../../api/api-actions";

export const useFetchCategories = (url: string) => {
    const [categories, setCategories] = useState<ApiCategories[] | null>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchCategories = async () => {
            setError(null);
            try {
                const data: ApiCategories[] = await getCategories(url);
                if (!isCancelled) {
                    setCategories(data);
                }
            } catch (err) {
                console.error(err);
                if (!isCancelled) {
                    setCategories(null);
                    setError('Error in fetchCategories');
                }
            }
        };

        fetchCategories();

        return () => {
            isCancelled = true;
        };
    }, [url]);

    return {
        categories,
        error,
    };
};
