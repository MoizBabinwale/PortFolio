import { useRef } from 'react'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import UploadFile from './UploadFile';
import ManualUpload from './ManualUpload';

const useStyles = makeStyles((theme) => ({
    button: {
        color: '#fff', // Text color
        padding: theme.spacing(2),
        borderRadius: "20px",
        height: "60px" // Add padding
    },
}));

function Upload() {
    const [isManual, setIsManul] = useState(false)
    const classes = useStyles();

    return (
        <div className="mt-4 d-flex" >
            <div className={classes.button} style={{ background: isManual ? "#228a25" : "grey", margin: "10px" }} onClick={() => setIsManul(true)}>
                Manual Upload
            </div>
            {/* Panel for "Upload File" */}
            <div className={classes.button} style={{ background: isManual ? "grey" : "#228a25", margin: "10px" }} onClick={() => setIsManul(false)}>
                Upload File
            </div>
            <div className="d-flex flex-column justify-content-centeralign-items-center">
                {isManual ? (<ManualUpload />) : (<UploadFile />)}

            </div>
        </div>
    )
}

export default Upload
