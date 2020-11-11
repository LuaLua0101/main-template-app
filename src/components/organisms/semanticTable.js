import React, { useEffect, useState } from 'react'
import { Button, Icon, Table, Menu, Label } from 'semantic-ui-react'

const TableExamplePagination = props => {
  useEffect(() => {
    console.log(props)
    setColumns(props.cols)
    setData(props.data)
  }, [props]);

  const [paging, setPaging] = useState(1);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const handlePagingClick = (e, { name }) => setPaging(name)

  return (
    <Table celled selectable padded compact color={'blue'}>
      <Table.Header >
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button
              floated='right'
              icon
              labelPosition='left'
              primary
              size='small'
            >
              <Icon name='user' /> Add User
          </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>
              Approve All
          </Button>

            <Button.Group size='small'>
              <Button >Cancel</Button>
              <Button.Or />
              <Button positive>Save</Button>
            </Button.Group>

          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
        <Table.HeaderCell >123456</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label as='a' color='teal' ribbon>
                Overview
         </Label>12345
         </Table.Cell>
            <Table.Cell>
              <Button content='Delete' icon='close' size='mini' color='red' labelPosition='left' />
            </Table.Cell>
            <Table.Cell>
              <Button content='Active' icon='close' size='mini' color='teal' labelPosition='left' />
            </Table.Cell>
          </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='4'>
            <Menu floated='right' inverted color={'blue'} size='mini'>
              <Menu.Item
                name={1}
                active={paging === 1}
                onClick={handlePagingClick}
              />
              <Menu.Item
                name={2}
                active={paging === 2}
                onClick={handlePagingClick}
              />
              <Menu.Item
                name={3}
                active={paging === 3}
                onClick={handlePagingClick}
              />
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default TableExamplePagination