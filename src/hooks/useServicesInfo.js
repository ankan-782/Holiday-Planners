import { useEffect, useState } from 'react';

const useServicesInfo = () => {
    const [servicesInfo, setServicesInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://holiday-planner-server-side.onrender.com/services')
            .then(res => res.json())
            .then(data => setServicesInfo(data))
            .finally(() => setLoading(false));
    }, [])
    return [servicesInfo, loading];
};

export default useServicesInfo;