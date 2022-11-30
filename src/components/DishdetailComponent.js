import { Component } from "react";
import{Card , CardBody,CardImg,CardText,CardTitle} from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedDish:this.props.dish
        }
    }


    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">

                <Card>
                    <CardImg src={dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){

        if(comments!=null){
         const menuComments=comments.map(comt => {
              return (
                <li key={comt.key}>
                    <p>{comt.comment}</p>
                    <p>--{comt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comt.date))}
                    </p>
                </li>
              );  
            });
            //const menuComments=comments.map((comt)=>{
                
                
           // });

            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {menuComments} 
                    </ul>
                </div>
            );
           
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        if(this.props.dish==null){
            return (
                <div></div>
            );
        }
        
        return ( 
            <div className="container">
                 <div className="row">
                     {this.renderDish(this.props.dish)}
                
                    {this.renderComments(this.props.dish.comments)}
                  </div>
            </div>
           
        );
    }
}

export default DishDetail;
