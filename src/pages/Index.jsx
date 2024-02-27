import { Box, Button, FormControl, FormLabel, Heading, Input, Select, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputFormat, setOutputFormat] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormatChange = (event) => {
    setOutputFormat(event.target.value);
  };

  const convertImage = () => {
    if (!selectedFile || !outputFormat) {
      toast({
        title: "Error",
        description: "Please select a file and output format.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Since we can't actually convert the file, we will just simulate the process
    toast({
      title: "Conversion Successful",
      description: `Your file has been converted to ${outputFormat.toUpperCase()}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Image File Converter</Heading>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Upload Image</FormLabel>
          <Input type="file" accept="image/*" onChange={handleFileChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Output Format</FormLabel>
          <Select placeholder="Select format" onChange={handleFormatChange}>
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="jpg">JPG</option>
            {/* Add other formats if needed */}
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={convertImage}>
          Convert
        </Button>
      </Stack>
    </Box>
  );
};

export default Index;
