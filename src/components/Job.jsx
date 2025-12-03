import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch } from 'react-redux';

const Job = ({ data }) => {

  const dispatch = useDispatch()

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={1} className="align-content-center"><button className="bg-info rounded" onClick={() => {
        dispatch({
          type: "ADD_TO_FAVORITES",
          payload: data.company_name
        })
      }}><i className="bi bi-star-fill text-light"></i></button></Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
