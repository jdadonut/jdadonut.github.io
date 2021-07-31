import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
function AboutQuestion(props) {
    return (
      <Card >
        <CardHeader>{props.question}</CardHeader>
        <CardBody>{props.answer}</CardBody>
      </Card>
    );
}
export default AboutQuestion