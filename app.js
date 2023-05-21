let text = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore quam molestias inventore atque. Quas labore libero pariatur accusamus aspernatur laboriosam iure corporis amet! Culpa, vel! Accusamus",
    "cumque distinctio sint? Voluptate quae officia, perferendis dicta sequi dignissimos error voluptatem! Voluptatum minus repellendus dolore facilis aspernatur laboriosam expedita tenetur error iure quos laudantium nisi, consequuntur accusamus facere et, at atque ipsam? Recusandae tenetur",
    "sequi id harum? Voluptate ipsum quibusdam, dolorem quidem iure temporibus maiores debitis ab perferendis laudantium vel consequatur pariatur a sunt sit non ex autem odit dolor consequuntur earum tempora. Eveniet ab inventore rerum reiciendis facere dolor iste mollitia rem, id quam, harum eaque dolorem animi quis ex. Explicabo doloribus aliquid suscipit nisi tenetur aspernatur repudiandae iusto cum quibusdam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium harum deleniti, in quasi pariatur rerum magni inventore accusamus hic ducimus! Vitae, architecto tempore non a beatae, itaque aspernatur eligendi blanditiis id omnis odit ullam, facere suscipit reiciendis distinctio voluptatum fugit repellendus repudiandae. Nihil possimus quas delectus, ",
    "reiciendis qui amet, animi, id impedit aliquam voluptas beatae error eum ex dignissimos officiis alias est incidunt cupiditate eos autem quae voluptates iusto expedita. Suscipit eaque numquam, facilis eius, rem deserunt repellendus illo eligendi maiores repellat aliquam illum. Impedit consequuntur laboriosam ipsa natus! Rem repellat ipsa ipsum voluptates expedita facere obcaecati culpa, deserunt rerum fugit quisquam beatae soluta assumenda in placeat illum aliquam id repudiandae, possimus dignissimos quasi magnam itaque.",

    "Laudantium officia consequatur odio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nisi dolor tempora assumenda quo temporibus, odit adipisci provident iste ea, quia nam veniam dignissimos distinctio? Quasi iusto vel delectus, esse commodi doloribus, ",

    "voluptatum quam dolorum eos porro rem labore. Nostrum, tempore? Impedit officiis natus consectetur, quos veritatis eos facilis assumenda totam sunt culpa laudantium corporis! Et eveniet quaerat esse, at optio amet repudiandae molestiae reiciendis aliquid ab adipisci quidem sequi rem ",

    "rerum unde tempora pariatur reprehenderit totam deleniti. Voluptatem provident officia mollitia illum nisi consectetur, adipisci earum voluptas at fugiat nemo culpa ipsam quia magnam laboriosam repudiandae molestiae quas eaque quisquam aliquid omnis corrupti obcaecati tempora possimus. Neque, harum! Reprehenderit rerum dolor possimus, cupiditate natus quidem vitae. Odit nemo eaque eos? Deserunt omnis perspiciatis consequuntur veritatis assumenda nobis tenetur. Repellat."
]



const item = document.querySelector("#items")
console.log(item)

const dataContainer  = document.querySelector("#data")
console.log(dataContainer)

const generate = ()=>{
    console.log(item.value)
    if(!isNaN(item.value) || item.value<0 || item.value>9){
        const randomIndex = Math.floor(Math.random()*text.length)
        dataContainer.innerHTML = `<p>${text[randomIndex]}</p>`

    }
    else{
        const data = text.slice(0, item.value)
        const para = data.map((d)=>{
            return `<p>${d}</p>`
        })
        dataContainer.innerHTML = para.join("")
}
}