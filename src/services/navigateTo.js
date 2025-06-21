import { useNavigate } from "react-router";

const navigateTo = () => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        if (!route) return;
        navigate(`/${route}`)
    }

    return handleNavigate;
}

export default navigateTo;