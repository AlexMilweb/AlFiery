$(document).ready(function() {
	// Уровень жидкости в колбе
	$('.characteristics__percentSkill').each(function() {
		var persentSkill = $(this).text();
		var variableSkill = Number(persentSkill.match(/\d+/));
		var heightSkillLevel = 100 - variableSkill;
		$(this).closest('.characteristics__mySkill').find('.characteristics__skillLevel').css('top', heightSkillLevel + '%');
		// Ширина и высота овала с шагом 5
		switch(variableSkill) {
			case 0:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(0).height(0);
				break;
			case 5:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(85).height(5);
				break;
			case 10:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(120).height(10);
				break;
			case 15:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(140).height(15);
				break;
			case 20:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(160).height(20);
				break;
			case 25:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(173).height(25);
				break;
			case 30:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(184).height(30);
				break;
			case 35:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(192).height(35);
				break;
			case 40:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(197).height(40);
				break;
			case 45:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(200).height(45);
				break;
			case 50:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(200).height(50);
				break;
			case 55:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(200).height(45);
				break;
			case 60:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(197).height(40);
				break;
			case 65:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(192).height(35);
				break;
			case 70:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(184).height(30);
				break;
			case 75:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(173).height(25);
				break;
			case 80:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(160).height(20);
				break;
			case 85:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(140).height(15);
				break;
			case 90:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(120).height(10);
				break;
			case 95:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(85).height(5);
				break;
			case 100:
				$(this).closest('.characteristics__mySkill').find('.characteristics__skillOval').width(0).height(0);
				break;
		}
	});
});