from datetime import datetime
def hora():
    agora = datetime.now().hour
    if agora > 18:
        return "Boa noite"
    elif agora > 12:
        return "Boa tarde"
    else:
        return "Bom dia"

name = input("Qual seu nome: ")

print(hora(),name)

