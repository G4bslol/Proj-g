CREATE TABLE "users" (
    "id" INT PRIMARY KEY,
    "name" VARCHAR(255),
    "email" VARCHAR(100)
);

CREATE TABLE "orders" (
    "id" SERIAL,
    "amount" DECIMAL(10,2),
    "user_id" INT,
    "created_at" DATE,

    FOREIGN KEY ("user_id") REFERENCES "users" ("id")
);

INSERT INTO "users" ("id", "name", "email")
    VALUES
        (1, 'Joh Doe', 'john.doe@example.com'),
        (2, 'Alice Johnson', 'alice.johnson@example.com'),
        (3, 'Michael Brown', 'michael.brown@example.com'),
        (4, 'Emily Davis', 'emily.davis@example.com'),
        (5, 'Robert Wilson', 'robert.wilson@example.com'),
        (6, 'Jane Smith', 'jane.smith@example.com');

INSERT INTO "orders" ("created_at", "amount", "user_id")
    VALUES
        ('2024-07-01', 20.12, 1),
        ('2024-07-02', 160.52, 2),
        ('2024-07-03', 180.75, 1),
        ('2024-07-04', 1120.67, 5),
        ('2024-07-05', 60.02, 6),
        ('2024-07-06', 320.2, 3);