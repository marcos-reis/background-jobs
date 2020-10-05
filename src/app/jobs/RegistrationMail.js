import Mail from '../lib/Mail'

export default{
  key:"RegistrationMail",
  options:{
    delay:5000,
    priority:3,
  }, async handle({data}){
    const {user} = data;

    await Mail.sendMail({
      from:'Background Jobs <background@jobs.com.br>',
      to:`${user.name} <${user.email}>`,
      subject:"Seja bem-vindo à nossa plataforma",
      html:`Olá, ${user.name} <br> Você ja pode fazer login em nosso sistema.`

    })
  }
}