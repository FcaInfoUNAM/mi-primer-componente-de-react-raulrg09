export function Grid({items}){
    return(
        <div className="grid">
            {/*
            <div class="card"><h2>FCA</h2><p>fca.unam.mx</p></div>
            <div class="card"><h2>google</h2><p>wwww.google.com</p></div>
            <div class="card"><h2>Facebook</h2><p>www.facebook.com</p></div>
            */}            
            {items.map(e => <div className="card"><h2>{e.title}</h2><p>{e.ref}</p></div>)}
        </div>
    )
}