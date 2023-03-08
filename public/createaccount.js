// ./public/createaccount

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  // function validate(field, label){
  //     if (!field) {
  //       setStatus('Error: ' + label);
  //       setTimeout(() => setStatus(''),3000);
  //       return false;
  //     }
  //     return true;
  // }

  // Mongodb Atlas connect
  const mongoString = process.env.DATABASE_URL;
  mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
  
  // Create user account
  app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password).
      then((user) => {
          console.log(user);
          res.send(user);
      })
  });
  
  // Login user
  app.get('/account/login/:email/:password', function (req, res) {
      res.send({
          email:      req.params.email,
          password:   req.params.password 
      });   
  });
  
  // All accounts
  app.get('/account/all', function (req, res) {
    dal.all().
      then((docs) => {
          console.log(docs);
          res.send(docs);
      })
  });
  
  // Update user account balance
  app.post('/account/update/:email/:amount', async (req, res) => {
    try {
      const { email, amount } = req.params;
      const updatedUser = await dal.update(email, amount);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Set up server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}