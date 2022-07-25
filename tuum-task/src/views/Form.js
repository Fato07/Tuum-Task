import React, { useState } from 'react';
import { Grid, Form, List, Header } from 'semantic-ui-react';
import ReactFlagsSelect from 'react-flags-select';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../css/form.css";

const industries = [
  { key: '1', text: 'Automative', value: 'Automative' },
  { key: '2', text: 'Banking', value: 'Banking' },
  { key: '3', text: 'Consulting', value: 'Consulting' },
  { key: '4', text: 'Finance', value: 'Finance' },
  { key: '5', text: 'Healthcare', value: 'Healthcare' },
  { key: '6', text: 'Media/PR', value: 'Media/PR' },
  { key: '7', text: 'Retail', value: 'Retail' },
  { key: '8', text: 'Technology', value: 'Technology' },
  { key: '9', text: 'Telecommunication', value: 'Telecommunication' },
  { key: '10', text: 'Other', value: 'Other' },
];

const geographies = [
  { key: '1', text: 'National', value: 'National' },
  { key: '2', text: 'Regional', value: 'Regional' },
  { key: '3', text: 'Global', value: 'Global' },
];

const FormContainer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    industry: '',
    country: '',
    geography: '',
    other: '',
    isTermsAndPolicy: false,
    isNewsLetter: false,
  });

  const isEnabled =
    formData.firstName.length > 0 &&
    formData.email.length > 0 &&
    formData.companyName.length > 0 &&
    formData.industry.length > 0 &&
    formData.country.length > 0 &&
    formData.isNewsLetter &&
    formData.isTermsAndPolicy;

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('success');
  };

  return (
    <>
      <Header
        as="h1"
        content="Contact us"
        className='form-header'
        style={{ marginTop: '8%', marginLeft: '37%' }}
      />
      <StyledGrid stackable>
        <Grid.Column width={4}>
          <List relaxed size='large'>
            <List.Item>
              <List.Content>
                <List.Header>Media enquiries:</List.Header>
                <List.Description>
                  <a href='mailto: press@tuumplatform.com' style={{ color: "inherit" }}> press@tuumplatform.com</a>
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item style={{ marginTop: "2rem" }}>
              <List.Content>
                <List.Header>Career questions:</List.Header>
                <List.Description>
                  <a href='mailto: careers@tuumplatform.com' style={{ color: "inherit" }}> careers@tuumplatform.com</a>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                placeholder="First name*"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                value={formData.firstName}
                required={true}
                style={{ borderTop: "none" }}
                className="input-field"
              />
              <Form.Input
                fluid
                placeholder="Last name"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                value={formData.lastName}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                fluid
                placeholder="Email*"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                required={true}
              />
              <Form.Input
                fluid
                placeholder="Job title"
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
                value={formData.jobTitle}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                fluid
                placeholder="Company Name*"
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                value={formData.companyName}
                required={true}
              />
              <Form.Select
                fluid
                options={industries}
                placeholder="Industry*"
                required={true}
                onChange={(e, value) =>
                  setFormData({ ...formData, industry: value.value.toString() })
                }
              />
            </Form.Group>

            <Form.Group widths="equal">
              <ReactFlagsSelect

                selected={formData.country}
                onSelect={(code) => setFormData({ ...formData, country: code })}
                className="country-field"
                placeholder="country*"
              />
              <Form.Select
                fluid
                options={geographies}
                placeholder="Operating geography"
                onChange={(e, value) =>
                  setFormData({
                    ...formData,
                    geography: value.value.toString(),
                  })
                }
              />
            </Form.Group>

            <Form.TextArea
              placeholder=""
              onChange={(e) =>
                setFormData({ ...formData, other: e.target.value })
              }
              value={formData.other}
              label="What would you like to talk about?"
              className='text-area'

            />
            <Form.Checkbox
              label="By submitting this form I accept privacy policy and cookie policy."
              required={true}
              checked={formData.isTermsAndPolicy}
              onChange={(e, value) =>
                setFormData({ ...formData, isTermsAndPolicy: value.checked })
              }

            />
            <Form.Checkbox
              label="I would like to receive your newsletter."
              required={true}
              checked={formData.isNewsLetter}
              onChange={(e, value) =>
                setFormData({ ...formData, isNewsLetter: value.checked })
              }
            />
            <Form.Button type="submit" disabled={!isEnabled}>
              Submit Form
            </Form.Button>
          </Form>
        </Grid.Column>
      </StyledGrid>
    </>
  );
};

const StyledGrid = styled(Grid)`
  &&& {
    width: 65%;
    margin-top: 2%;
    margin-left: 20%;
  }
`;

export default FormContainer;
