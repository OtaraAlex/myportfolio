import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="text-2xl font-bold leading-tight mb-4">
                New Message
              </Heading>
              <Text className="mb-2 font-semibold">From: {senderName}</Text>
              <Text className="mb-2 font-semibold">Email: {senderEmail}</Text>
              <Hr className="my-4" />
              <Heading className="text-xl font-bold leading-tight mb-2">
                Message:
              </Heading>
              <Text className="whitespace-pre-wrap">{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}