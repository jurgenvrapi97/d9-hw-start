import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Trash2Fill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'

const Favorite = () => {
  const list = useSelector((state) => state.list.content)
  const dispatch = useDispatch()
  console.log(list.lenght)
  if (list.lenght === undefined) {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Nessun elemento aggiunto</h2>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <>
      <h1 className="text-center">Lista dei preferiti</h1>
      <Container>
        {list.map((job, i) => (
          <Row
            key={i}
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
          >
            <Col xs={3}>
              <Link to={`/${job.company_name}`}>{job.company_name}</Link>
            </Col>
            <Col xs={8}>
              <a href={job.url} target="_blank" rel="noreferrer">
                {job.title}
              </a>{' '}
            </Col>
            <Col xs={1}>
              <div id="add" className="rounded bg-danger position-relative">
                <Trash2Fill
                  onClick={() => {
                    dispatch({
                      type: 'REMOVE_TO_FAVORITE',
                      payload: i,
                    })
                  }}
                  className="text-light text-center position-absolute top-50 start-50 translate-middle"
                ></Trash2Fill>
              </div>
            </Col>
          </Row>
        ))}{' '}
      </Container>
    </>
  )
}

export default Favorite
