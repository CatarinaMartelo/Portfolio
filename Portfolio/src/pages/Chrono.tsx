import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function Chrono() {
  return (
    <Timeline position="alternate" className="timeline">
      <h1 className="my-journey">&lt;My Journey&#47;&gt;</h1>
      <TimelineItem>
        <TimelineOppositeContent color="#000000" fontWeight={500}>
          2011-2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p>Faculty of Arts and Humanities of University of Coimbra</p>
          <p>Tourism, Leisure and Heritage</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="#000000" fontWeight={500}>
          2016-2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p>Lamego Hotel & Live </p>
          <p>Front-Desk Receptionist and Head of Group's Department</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="#000000" fontWeight={500}>
          2018-2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p>1908 Lisboa Hotel </p>
          <p>Front-Desk Receptionist</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="#000000" fontWeight={500}>
          2022-2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p>ETIC - School of Technologies, Innovation and Creation </p>
          <p>Web Development</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
