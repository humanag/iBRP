IF OBJECT_ID (N'dbo.GetLastestCode', N'FN') IS NOT NULL
    DROP FUNCTION GetLastestCode;
GO

CREATE FUNCTION dbo.GetLastestCode(@TableName nvarchar(20), @ColumnCode nvarchar(20))
RETURNS nvarchar(20)
AS 
BEGIN
    DECLARE @lastestMANGANH nvarchar(3);
    
    --DECLARE @SQL NVARCHAR(20)
    --SET @SQL = ('SELECT TOP 1 ' + @ColumnCode + ' FROM ' + @TableName + ' TBL ORDER BY ' + @ColumnCode + ' DESC')
    -- EXECUTE (@SQL)
    SELECT TOP 1 @lastestMANGANH = MANGANH FROM DS_NGANH TBL ORDER BY MANGANH DESC
    SET @lastestMANGANH = CONVERT(INT, @lastestMANGANH)
    SET @lastestMANGANH = @lastestMANGANH + 1
    RETURN @lastestMANGANH + 1
END;