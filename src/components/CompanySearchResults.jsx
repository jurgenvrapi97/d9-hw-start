import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { startFetch } from '../redux/action'

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.jobs.finded)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startFetch(params.company))
  }, [dispatch, params.company])

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
