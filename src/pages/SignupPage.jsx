import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = () => {
    // Simulate sending OTP, you may replace this with actual OTP sending logic
    // For simplicity, here we just console log the OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    console.log('Generated OTP:', generatedOtp);
    setIsOtpSent(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Reset error message
    setError('');

    // Basic validation
    if (!name || !email || !mobile || (!otp && isOtpSent)) {
      setError('Please fill in all fields.');
      return;
    }

    // Add your signup logic here
    console.log('Signing up with:', name, email, mobile);
  };

  return (
    <Container className="mt-5">
      <Form style={{ maxWidth: '400px', margin: 'auto' }} className='border p-4 mb-3'>
        <h2 className="mb-4">Sign Up</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group controlId="formBasicName" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter mobile number"
            pattern="[0-9]{10}"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid 10-digit mobile number.
          </Form.Control.Feedback>
        </Form.Group>

        {!isOtpSent ? (
          <Button variant="primary" className='mt-2' type="button" onClick={handleSendOtp}>
            Send OTP
          </Button>
        ) : (
          <Form.Group controlId="formBasicOtp">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
            className='mt-2'
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </Form.Group>
        )}

        <Button variant="primary" className='mt-2 ms-3' type="submit" onClick={handleSignup}>
          Sign Up
        </Button>

        <p className="mt-3">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </Form>
    </Container>
  );
};

export default SignupPage;
