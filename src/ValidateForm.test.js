import ValidatedForm from './newreg'
import { render, fireEvent,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('<Form />', () =>{

    render(<ValidatedForm />);
    

    const name = screen.getByTestId('username-input');
    const mobileno = screen.getByTestId('mobileno-input');
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const cpassword = screen.getByTestId('cpassword-input');

    expect(name).toBeInTheDocument();
    expect(name).toHaveAttribute('type', 'text');
    expect(mobileno).toBeInTheDocument();
    expect(mobileno).toHaveAttribute('type', 'tel');
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute('type', 'email');
    expect(password).toBeInTheDocument();
    expect(password).toHaveAttribute('type', 'password');
    expect(cpassword).toBeInTheDocument();
    expect(cpassword).toHaveAttribute('type', 'password');

});

test("check name is valid" , () => {
    // render(<ValidatedForm />);

    const name = screen.getByTestId('username-input');
userEvent.type(name, 'lakshmi');
    expect(screen.getByTestId('username-input')).toHaveValue('lakshmi'); 

});
test("check phone is valid" , () => {
    render(<ValidatedForm />);


    const mobileno = screen.getByTestId('mobileno-input');
    userEvent.type(mobileno, '9876543210');

    expect(screen.getByTestId('mobileno-input')).toHaveValue('9876543210'); 

});
test("check email is valid" , () => {
    render(<ValidatedForm />);


    const name = screen.getByTestId('email-input');
    userEvent.type(name, 'test@mail.com');

    expect(screen.getByTestId('email-input')).toHaveValue('test@mail.com'); 

});
test("check password is valid" , () => {
    render(<ValidatedForm />);


    const name = screen.getByTestId('password-input');
    userEvent.type(name, 'lakshmi');

    expect(screen.getByTestId('password-input')).toHaveValue('lakshmi'); 

});

test("check submit is working" ,() =>{

    render(<ValidatedForm />);
    const val = screen.getByTestId('val');
    const button = screen.getByTestId ('submit');
    fireEvent.click(button);
    expect(val).toHaveTextContent("Registration Form")
   
});

  
   

  



