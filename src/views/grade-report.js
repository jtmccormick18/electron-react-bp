import React from 'react';

import {Row,Col,Container,Button,CardDeck} from 'react-bootstrap';

import CustomSql from '../utils/inputs/custom-sql-query';
import ImprovementCard from '../components/improvement-card';

import axios from 'axios';

export default class GradeReport extends React.Component{
    state={
        sqlSelect:'SELECT reprop.* from reprop left join realprop',
        // customSql:null
        customSql:"realprop.digclass in ('R')",

        improvements:[],
    }

    componentDidMount(){

    }

    handleChange=(e)=>{
        // console.log({e});
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    enterSql=(e)=>{
        let sqlQuery=this.state.customSql;
        axios.post('/api/custom-sql',{sqlQuery})
        .then(result=>{
            console.log({result})
            let improvements=result.data.improvements;
            console.log({improvements});
            this.setState({improvements});
        })
        .catch(err=>console.error({err}))
    }

    render(){
        const {sqlSelect,customSql,improvements}=this.state;
        return(<div>
            
            <CustomSql label={sqlSelect} value={customSql} onChange={this.handleChange}/>
            <Button disabled={!customSql} onClick={this.enterSql}>Test</Button>
            

            {improvements && improvements.length>0 && <CardDeck>
                {improvements.map(imp=><ImprovementCard {...imp}/>)}
            </CardDeck>
            }
            </div>)
    }
}
