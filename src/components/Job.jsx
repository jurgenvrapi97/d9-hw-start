import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Plus } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../redux/action'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>{' '}
      </Col>
      <Col xs={1}>
        <div id="add" className="rounded bg-success position-relative">
          <Plus
            onClick={() => {
              dispatch(addToFavorite(data))
            }}
            className="text-light text-center position-absolute top-50 start-50 translate-middle"
          ></Plus>
        </div>
      </Col>
    </Row>
  )
}

export default Job
