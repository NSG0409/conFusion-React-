import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish(dish) {
        if (dish!= null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        if (dish!= null && dish.comments!=null) {
            const comment = dish.comments.map(data => {
                return (
                    <ul className="list-unstyled">
                        <li>{data.comment}</li>
                        <li>-- {data.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(data.date)))}</li>
                    </ul>
                );
            });

            return(
                <div>
                    <h4>Comments:</h4>
                    {comment}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }   
    }

    const DishDetail = (props) => {
        console.log('Dishdetail Component render invoked')
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            </div>  
        );
    }            

export default DishDetail;