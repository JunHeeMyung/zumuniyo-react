import React,{  useState,useEffect, useContext} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { GlobalContext } from "components/member/GlobalProvider";

const LoadingSpinner = (props)=> {

    const {axiosCounter} = useContext(GlobalContext);

    const [open, setOpen] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        "&:focus":{ outline: 'none' }
    };

    useEffect(
        () => {
          setOpen(axiosCounter>0);
        }, [axiosCounter]
      );

    return (
      <>
            <Modal open={open}>
                <Box sx={style}>
                <CircularProgress sx={{circle:{color:'orange'}}}/>
                </Box>
            </Modal>
            {props.children}
            
      </>
    );
  }
  export default LoadingSpinner;