import React from 'react';
import  {Component} from 'react';
import '../home/home.css';
// import Header from "../../sections/Header";
import PageHeader from '../../sections/Page Header';
import Pusher from '../../sections/Pusher';
import Loading from '../../sections/Loading';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { updatePageTitle } from "../../../actions/projectActions";

class Results extends Component {

componentDidMount(){
    let searchTerm = this.props.match.params.searchTerm;
    let pageTitle = this.props.recipes.length?
    `Showing results for "${searchTerm}".`:
    `There are no recipes found for "${searchTerm}".`;
    this.props.updatePageTitle(pageTitle);
  }

  render() {
      return <div>
                <PageHeader {...this.props}/>
                <div className="container">   
                    <div className="row">
                    {!this.props.recipes.length? <Pusher/>:
                        this.props.recipes.map(item => 
                          <div className="card col-md-4 my-2 border-0 shadow-sm recipe-div" key={item.idMeal}>
                            <img className="card-img-top rounded-circle mt-3"  
                                data-type="name"
                                src={item.strMealThumb} alt={this.props.name} 
                                onClick={()=>this.props.history.push(`/categories/${item.strCategory}/${item.strMeal}/${item.idMeal}`)}/>
                            <div className="card-body recipe-title">
                              <h5 className="card-title text-center">{item.strMeal}</h5>
                            </div>
                          </div>
                        )
                    }
                    </div>
                  </div>
              </div>
              }
    }
 
Results.propTypes = {
        updatePageTitle:PropTypes.func.isRequired,
        pageTitle:PropTypes.string,
        errors:PropTypes.object,
        recipes:PropTypes.array.isRequired,
        // showBackButton:PropTypes.boolean,
        }
      
const mapStateToProps = state =>({
          errors:state.error,
          recipes:state.recipes,
          pageTitle:state.pageTitle

      })
export default connect(mapStateToProps,{updatePageTitle}) (Results);