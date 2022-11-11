describe("teste de calculos", () => {
    //Forma de automatizar o processo de teste
    //Irei deixar duas formas possiveis para testar as operações(uma criando Valores que irá receber 2 valores, 1 operação e o resultado esperado)
    //E outra forma de teste BEM manual, descrevendo passo a passo o processo
    const Valores = (valor1, valor2, operacao, Resultesperado) => {
        cy.visit("/");
        `${valor1}`.split('').forEach((num) => {
            cy.get('[value="'+num+'"]').click()
        });
        cy.get('[value="'+operacao+'"]').click();
        `${valor2}`.split('').forEach((num) => {
            cy.get('[value="'+num+'"]').click()
        });
        cy.get('[value="="]').click();
        cy.get('#tela').contains(Resultesperado);
    }

    it("somaValoresCorreto", () => {
        Valores(5, 3, "+", 8)
    })

    it("somaValoresIncorreto",() =>{
        Valores(4, 3, "+", 8)
    })

    it("subValoresCorreto", () => {
        Valores(44, 2, "-", 42)
    })

    it("SubValoresIncorreto", () => {
        Valores(33, 30, "-", 4)
    })

    it("MultValoresCorreto", () => {
        Valores(3, 3, "x", 9)
    })

    it("MultValoresIncorreto", () => {
        Valores(3, 1, "x", 4)
    })

    it("DivValoresCorreto", () => {
        Valores(33, 33, "/", 1)
    })

    it("DivValoresIncorreto", () => {
        Valores(6, 3, "/", 4)
    })

    it("SomaManualCorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="+"]').click()//selecionando e clicando "+"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "8")//selecionar a tela e perguntar se a resposta foi 8
    })

    it("SomaManualIncorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="+"]').click()//selecionando e clicando "+"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "10")//selecionar a tela e perguntar se a resposta foi 10
    })

    it("MultiplicaçãoManualCorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="x"]').click()//selecionando e clicando "x"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "15")//selecionar a tela e perguntar se a resposta foi 15
    })

    it("MultiplicaçãoManualIncorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="x"]').click()//selecionando e clicando "x"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "16")//selecionar a tela e perguntar se a resposta foi 16
    })

    it("SubtraçãoManualCorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="-"]').click()//selecionando e clicando "-"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "22")//selecionar a tela e perguntar se a resposta foi 22
    })

    it("SubtraçãoManualIncorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="-"]').click()//selecionando e clicando "-"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="3"]').click()//selecionando e clicando "3"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "20")//selecionar a tela e perguntar se a resposta foi 20
    })

    it("DivisãoManualCorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="/"]').click()//selecionando e clicando "/"
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "11")//selecionar a tela e perguntar se a resposta foi 11
    })

    it("DivisãoManualIncorreta",() => {
        cy.visit('/') //visite a home
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="/"]').click()//selecionando e clicando "/"
        cy.get('[value="5"]').click()//selecionando e clicando "5"
        cy.get('[value="="]').click()//selecionando e clicando "="
        cy.get('#tela').should("have.text", "15")//selecionar a tela e perguntar se a resposta foi 15
    })
})