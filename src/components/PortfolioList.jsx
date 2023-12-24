import { Row, Col } from "antd";
import PortfolioWork from "./PortfolioWork";

function PortfolioList({ works, school , semester }) {
  return (
        <div className='portright'>
        <Row gutter={[32,32]} justify={"center"}>
          {works.map((homework,idx) => {
            if(homework.workName.length > 0) return (
              <Col 
                key={`work-${idx}`}
                sm={24}
                md={12}
                xl={8}
              >
                <PortfolioWork
                  data={homework}
                  key={`work-${idx}`}
                  school={school}
                  semester={semester}
                />
              </Col>
            );
          })}
        </Row>
      </div>
  );
}

export default PortfolioList;