	
	let inputAdultos = document.getElementById("adultos");
	let inputCriancas = document.getElementById("criancas");
	let inputDuracao = document.getElementById("duracao");

	let resultado = document.getElementById('resultado');

	function calcular(){
		console.log("Calculando...");

		let adultos = inputAdultos.value
		let criancas = inputCriancas.value
		let duracao = inputDuracao.value
	
		let qntTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);
		console.log('Carne: ' + qntTotalCarne);

		let qntTotalCerveja = cervejaPorPessoa(duracao) * adultos;
		console.log('Cerveja: ' + qntTotalCerveja);

		let qntTotalBebidas = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao)/2 * criancas);
		console.log('Bebidas: ' + qntTotalBebidas);
		
		resultado.innerHTML = '<h2>Todos deverão levar:</h2>'
		resultado.innerHTML += `<p>${qntTotalCarne/1000} kg de Carne</p>`
		resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja/600)} garrafas de Cerveja</p>`
		resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas/2000)} garrafas de Refrigerante</p>`
	}

	function carnePorPessoa(duracao){
		if(duracao >= 6){
			return 650;
		}else{
			return 400
		}
	}

	function cervejaPorPessoa(duracao){
		if(duracao >= 6){
			return 2000;
		}else{
			return 1200
		}
	}

	function bebidaPorPessoa(duracao){
		if(duracao >= 6){
			return 1500;
		}else{
			return 1000
		}
	}

	