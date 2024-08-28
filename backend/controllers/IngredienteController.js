const Pao = require('../models/Pao')
const Proteina = require('../models/Proteina')
const Queijo = require('../models/Queijo')
const Adicional = require('../models/Adicional')
 
module.exports = class IngredienteController{
    static async registrarPao(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }

        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatório"})
            return
        }

       
        const paoCadastrado = await Pao.findOne({sku: sku})

        if (paoCadastrado){
            res.status(422).json({mensagem: "Pãp já cadastrado"})
            return
        }

    
        /* Adicionando o pão ao bd */
        const pao = new Pao({sku, descricao})

        try{
            const novoPao = await pao.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    }
    
        static async registrarProteina(req, res){
            const sku = req.body.sku
            const descricao = req.body.descricao
            
            if(!sku){
                res.status(422).json({mensagem: "O código sku é obrigatório"})
                return
            }
    
            if(!descricao){
                res.status(422).json({mensagem: "A descrição é obrigatório"})
                return
            }
    
           
            const proteinaCadastrado = await Pao.findOne({sku: sku})
    
            if (proteinaCadastrado){
                res.status(422).json({mensagem: "Proteina já cadastrado"})
                return
            }
    
        
            /* Adicionando o proteina ao bd */
            const proteina = new Pao({sku, descricao})
    
            try{
                const novaProteina = await proteina.save()
            } catch(erro){
                res.status(500).json({mensagem: erro})
            }
        } 

        
            static async registrarQeuijo(req, res){
                const sku = req.body.sku
                const descricao = req.body.descricao
                
                if(!sku){
                    res.status(422).json({mensagem: "O código sku é obrigatório"})
                    return
                }
        
                if(!descricao){
                    res.status(422).json({mensagem: "A descrição é obrigatório"})
                    return
                }
        
               
                const queijoCadastrado = await Queijo.findOne({sku: sku})
        
                if (queijoCadastrado){
                    res.status(422).json({mensagem: "Queijo já cadastrado"})
                    return
                }
        
            
                /* Adicionando o queijo ao bd */
                const queijo = new Queijo({sku, descricao})
        
                try{
                    const novoQueijo = await queijo.save()
                } catch(erro){
                    res.status(500).json({mensagem: erro})
                }
            } 

          
                static async registrarAdicional(req, res){
                    const sku = req.body.sku
                    const descricao = req.body.descricao
                    
                    if(!sku){
                        res.status(422).json({mensagem: "O código sku é obrigatório"})
                        return
                    }
            
                    if(!descricao){
                        res.status(422).json({mensagem: "A descrição é obrigatório"})
                        return
                    }
            
                   
                    const adicionalCadastrado = await Adicional.findOne({sku: sku})
            
                    if (adicionalCadastrado){
                        res.status(422).json({mensagem: "Adicional já cadastrado"})
                        return
                    }
            
                
                    /* Adicionando o adicional ao bd */
                    const Adicional = new Adicional({sku, descricao})
            
                    try{
                        const novoAdicional = await pao.save()
                    } catch(erro){
                        res.status(500).json({mensagem: erro})
                    }
                } 

}
