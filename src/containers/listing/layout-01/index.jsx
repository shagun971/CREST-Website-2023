import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import { SectionTitleType, ItemType } from "@utils/types";
import {
  SectionWrap,
  JobList,
  JobItem,
  JobTitle,
  JobType,
  JobDesc,
  JobButton,
} from "./style";

const ListingArea = ({ dataOpen, dataClosed }) => {
  //console.log(data);
  return (
    <SectionWrap>
      <Container>
        {dataOpen?.section_title && (
          <SectionTitle
            mb={["30px", null, "45px"]}
            maxWidth={["700px"]}
            mx="auto"
            {...dataOpen.section_title}
          />
        )}
        <JobList>
          <h2>Current recuitment</h2>
          {dataOpen?.items?.map((job, i) => {
            console.log(job);
            const isEven = i % 2 === 0;
            return (
              <JobItem key={job.id} isEven={isEven}>
                <Row>
                  <Col lg={3}>
                    <JobTitle>{job.title}</JobTitle>
                    <JobType>{job.type}</JobType>
                  </Col>
                  <Col lg={6}>
                    <JobDesc>{job.description}</JobDesc>
                  </Col>
                  <Col lg={3}>
                    <JobButton>
                      <a href={job.path}>
                        <Button
                          to={job.path}
                          varient="outlined"
                          bordercolor="#ddd"
                        >
                          Detail
                        </Button>
                      </a>
                    </JobButton>
                  </Col>
                  <Col lg={3}></Col>
                </Row>
              </JobItem>
            );
          })}
          <h2>Closed Positions</h2>
          {dataClosed?.items?.map((job, i) => {
            console.log(job);
            const isEven = i % 2 === 0;
            return (
              <JobItem key={job.id} isEven={isEven}>
                <Row>
                  <Col lg={3}>
                    <JobTitle>{job.title}</JobTitle>
                    <JobType>{job.type}</JobType>
                  </Col>
                  <Col lg={6}>
                    <JobDesc>{job.description}</JobDesc>
                  </Col>
                  <Col lg={3}>
                    <JobButton>
                      <a href={job.path}>
                        <Button
                          to={job.path}
                          varient="outlined"
                          bordercolor="#ddd"
                        >
                          Detail
                        </Button>
                      </a>
                    </JobButton>
                  </Col>
                  <Col lg={3}></Col>
                </Row>
              </JobItem>
            );
          })}
        </JobList>
      </Container>
    </SectionWrap>
  );
};

ListingArea.propTypes = {
  data: PropTypes.shape({
    section_title: PropTypes.shape(SectionTitleType),
    items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
  }),
};

export default ListingArea;
