interface IUsuario{
    id: string;
    email: string;
    cargo?: 'user' | 'coordenador' | 'supervisor';
}



function redirecione(usuario: IUsuario){
   if(usuario.cargo){
    // redirecionar para a area de admin
   }

   //redirecionar para a area do user
}