import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

const Loading = () => {
    return (
        <div>
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        </div>
    );
};

export { Loading };