import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { Progress } from "@mantine/core";

const ProgressBar = ({ file, setFile } : {file: any, setFile: any}) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Progress value={progress} />
  );
};

export default ProgressBar;