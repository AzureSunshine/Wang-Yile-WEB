function regularFilterHTML(src){
	str = str.replace(/<\/?[^>]*>/g,''); //ȥ��HTML tag
	str = str.replace(/[ | ]*\n/g,'\n'); //ȥ����β�հ�
	//str = str.replace(/\n[\s| | ]*\r/g,'\n'); //ȥ��������
	str=str.replace(/ /ig,'');//ȥ�� 
	return str;
}


