import { useEffect } from "react";

export function useScrollToTop(trigger?: unknown) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [trigger]);
}
