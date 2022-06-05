import * as React from "react";
import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Textarea
} from "@chakra-ui/react";

export function StandAloneControls() {
  const [value, setValue] = React.useState("1");

  return (
    <>
      <Input placeholder="Outline variant" my={2} />
      <Input variant="filled" placeholder="Filled variant" mb={2} />
      <Input variant="flushed" placeholder="Flushed variant" mb={2} />
      <Select mb={2}>
        <option>Outline</option>
      </Select>
      <Select variant="filled" mb={2}>
        <option>Filled</option>
      </Select>
      <Select variant="flushed" mb={2}>
        <option>Flushed</option>
      </Select>
      <Checkbox mb={2} defaultIsChecked>
        Checkbox
      </Checkbox>
      <RadioGroup mb={2} onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
      <Stack mb={2} align="center" direction="row">
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </Stack>
      <Textarea placeholder="Sample text" size="lg" mb={2} />
      <Textarea variant="filled" placeholder="Sample text" size="lg" mb={2} />
      <Textarea variant="flushed" placeholder="Sample text" size="lg" mb={2} />
      <Button mb={2}>A Button</Button>
    </>
  );
}
