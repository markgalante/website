import * as React from "react";

import { Text } from "./Text";
import { Section } from "./Section";

export function Body() {
  return (
    <Section>
      <Text.Header1>Hello world</Text.Header1>
      <Text.Body>Foo Bar Hello, How are you?</Text.Body>
    </Section>
  );
}
