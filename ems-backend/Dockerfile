# ============
# Build Stage
# ============
FROM maven:3.9.5-eclipse-temurin-17 AS build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the backend source code
COPY src ./src

# Package the application
RUN mvn clean package -DskipTests

# ============
# Run Stage
# ============
FROM eclipse-temurin-17-jdk-alpine
WORKDIR /app

# Copy built jar file from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Start the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
