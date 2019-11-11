import React from 'react';
import {Form,Checkbox,Button,Icon,Grid,Table,Image,Select,Modal} from 'semantic-ui-react';

import '../../styles/admin/productadmin.css';
const categoryOptions = [
  { key: 'a', text: 'Alcoholic', value: 'alcoholic' },
  { key: 'n', text: 'Non-Alcoholic', value: 'nonalcoholic' },
  { key: 'e', text: 'Energy', value: 'energy' },
  { key: 'w', text: 'Water', value: 'water' },
]
const brandOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const AdminContent = () => (
  <div>

    <Grid celled columns='equal'  className='mainContent'>
      <Grid.Column width={12}>
        Product Description
      <Table padded celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No.</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Brand/Type</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Picture</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1.</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>
              <Image 
                  src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
                  size='mini' 
                  circular 
              />
            </Table.Cell>
            <Table.Cell>
              <Button
                floated='right'
                icon
                primary
                size='small'
              >
                <Icon name='trash' />
                </Button>
              </Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
      <Modal trigger={<Button>Add Product</Button>} centered={false}>
        <Modal.Header>Add A Drink</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid>
              <Grid.Column width={10}>
              <Form>
                <Form.Field>
                  <label>Product Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field
                  control={Select}
                  label='Category'
                  options={categoryOptions}
                  placeholder='Select Category'
                >
                </Form.Field>
                <Form.Field>
                  <label>Brand / Type</label>
                  <input placeholder='Brand or Type' />
                </Form.Field>
                <Form.Field>
                  <label>Price</label>
                  <input placeholder='Price' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Details Provided Above' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />  
                
                <input type="file" name="drinkimage" accept="image/gif, image/jpeg, image/png" />
            </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </Grid.Column>

      <Grid.Column>
        Product Category
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>No. of Drinks</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                Alcoholic
              </Table.Cell>
              <Table.Cell>
                4
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Non-Alcoholic
              </Table.Cell>
              <Table.Cell>
                4
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Energy
              </Table.Cell>
              <Table.Cell>
                4
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid>
  </div>
)

export default AdminContent;