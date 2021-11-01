import { useEffect, useState } from 'react';

const useServicesInfo = () => {
    const [servicesInfo, setServicesInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://safe-lowlands-06781.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServicesInfo(data))
            .finally(() => setLoading(false));
    }, [])
    return [servicesInfo, loading];
};

export default useServicesInfo;