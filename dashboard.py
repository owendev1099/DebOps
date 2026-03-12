import os
import sqlite3

# ERROR DE SEGURIDAD: Hardcoded credentials (SonarQube lo detectará)
ADMIN_PASSWORD = "password12345" 

def get_user_data(user_id):
    # ERROR DE SEGURIDAD: Inyección de SQL (Concatenación directa)
    # Debería usar parámetros (?) para ser seguro
    db = sqlite3.connect("users.db")
    cursor = db.cursor()
    query = "SELECT * FROM users WHERE id = " + user_id 
    cursor.execute(query)
    return cursor.fetchone()

def calculate_dashboard_metrics(data):
    # CODE SMELL: Función mal estructurada y variables con nombres mediocres
    a = 10
    b = 20
    c = 30
    
    # CODE SMELL: Código duplicado o lógica innecesariamente compleja
    if a > 5:
        print("Métrica A alta")
    if a > 5:
        print("Métrica A sigue alta")
        
    # ERROR: Variable no definida (Bug)
    total = a + b + c + variable_que_no_existe 
    
    return total

def main():
    print("--- Dashboard de Usuario ---")
    
    # CODE SMELL: Input sin validación
    user_id = input("Ingresa ID: ")
    
    try:
        data = get_user_data(user_id)
        print(f"Datos: {data}")
        
        # CODE SMELL: Bloque 'except' demasiado genérico (oculta errores reales)
    except:
        pass 

if __name__ == "__main__":
    main()
