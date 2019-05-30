import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { login_repairer } from '../../actions/repairer-actions';
import './LoginForm.css';

const LoginForm = ({ auth,login_repairer,history }) => {
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if(auth) {
            history.push('/home')
        }
    },[auth])

    const onChange = e => {
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        login_repairer(formData)
    }

    return (
        <form onSubmit={onSubmit} className="probootstrap-main js-probootstrap-main col-12">
          <h1 className="offset-2">Заповніть поля</h1>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-6">
            <input type="email" onChange={onChange} name="email" value={formData.email} className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-6">
            <input type="password" onChange={onChange} name="password" value={formData.password} className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10 text-center">
            <button type="submit" className="btn btn-primary">Увійти</button>
          </div>
        </div>
      </form>
    )
}

const mapStateProps = state => {
    return {
        auth: state.repairer.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login_repairer: formData => dispatch(login_repairer(formData))
    } 
}

export default connect(mapStateProps,mapDispatchToProps)(LoginForm);