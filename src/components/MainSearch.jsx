import { useState } from 'react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { mainFetch } from '../redux/action'
import Job from './Job'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false)
  const jobs = useSelector((state) => state.jobs.finded)
  const loading = useSelector((state) => state.jobs.loading)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    dispatch(mainFetch(query))
    console.log(loading)
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col
          xs={12}
          className="d-flex justify-content-center mb-3 p-3
        "
        >
          <Link to="/favorite">
            <div className="rounded bg-success p-1 text-light">Favorite</div>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col
          xs={10}
          className=" d-flex flex-column justify-content-center mx-auto mb-5"
        >
          {loading && submitted ? (
            <Spinner
              className=" mt-5 d-inline"
              animation="border"
              role="status"
            />
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
