function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	var pais = "XeroxAprovadores" + hAPI.getCardValue("pais");

	userList.add("Pool:Group:"+pais);

	return userList;

}